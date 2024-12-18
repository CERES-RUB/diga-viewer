import { useLayoutEffect, useMemo, useState } from 'react';
import type { Annotation } from '@annotorious/react';
import { animated, easings, useTransition } from '@react-spring/web';
import { X } from 'lucide-react';
import { useThesaurus } from '@lib/hooks';
import { getTags, groupByOverlap } from '@lib/utils';
import { Thumbnail } from './Thumbnail';
import type { RelatedImageAnnotation, Tag } from 'src/Types';

import './RelatedImages.css';

interface RelatedImagesProps {

  annotation?: Annotation;

  currentSlug: string;

  open?: boolean;

  related?: RelatedImageAnnotation[];

  onClose(): void;

}

export const RelatedImages = (props: RelatedImagesProps) => {

  const [mounted, setMounted] = useState(false);

  const thesaurus = useThesaurus();

  const tags: Tag[] = useMemo(() =>
    props.annotation ? getTags(props.annotation) : [], [props.annotation]);

  const grouped = useMemo(() =>
    groupByOverlap<RelatedImageAnnotation>(tags, props.related || []), [tags, props.related]);

  const transition = useTransition([props.open && thesaurus], {
    from: { width: mounted ? 0 : 300 },
    enter: { width: 300 },
    leave: { width: 0 },
    config:{
      duration: 150,
      easing: easings.easeInCubic
    }
  });

  useLayoutEffect(() => {
    setTimeout(() => setMounted(true), 1);
  }, []);

  const getLink = (annotation: RelatedImageAnnotation) => {
    if (annotation.id) {
      return annotation.slug === props.currentSlug
        ? `#${annotation.id.substring(annotation.id.lastIndexOf('/') + 1)}`
        : `/image/${annotation.slug}/#${annotation.id.substring(annotation.id.lastIndexOf('/') + 1)}`;
    } else {
      // Image-level metadata
      return annotation.slug === props.currentSlug 
        ? '#' // Should never happen
        : `/image/${annotation.slug}`;
    }
  }

  return transition((style, open) => open && (
    <animated.aside 
      style={style}
      className="related related-images">
      <button 
        onClick={props.onClose}
        className="close">
        <X size={20} strokeWidth={1.5} />
      </button>

      <div className="related-verses-wrapper">
        <h3>
          Images {props.annotation && `(${props.related ? props.related.length : 0})`}
        </h3>

        {props.annotation ? (
          <ul>
            {(grouped.map((group, idx) => group.related.map(({ annotation }) => (
              <li key={`${idx}-${annotation.id}`}>
                <div className="preview">
                  <Thumbnail 
                    href={getLink(annotation)}
                    src={annotation.thumbnail} />

                  <div className="taglist-wrapper">
                    <ul className="taglist">
                      {annotation.tags.map(t => (
                        <li 
                          key={t.id}
                          className={tags.some(tag => tag.id === t.id) ? 'common' : undefined}>
                          {thesaurus?.find(term => term.id === t.id)?.label || t.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a href={getLink(annotation)}>
                  {annotation.image}
                </a>
              </li>
            ))))}
          </ul>
        ) : (
          <div className="no-selection">
            No annotation selected.
          </div>
        )}
      </div>
    </animated.aside>
  ))

}