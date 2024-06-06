import { useState } from 'react';
import { Annotorious } from '@annotorious/react';
import type { Annotation, W3CImageAnnotation } from '@annotorious/react';
import { AnnotoriousHash } from '@components/AnnotoriousHash';
import { PageHeader } from '@components/PageHeader';
import { RelatedImages } from '@components/RelatedImages';
import { RelatedVerses } from '@components/RelatedVerses';
import { useAnnotations, useLocalStoreState } from '@lib/hooks';
import { AnnotatedImage } from './AnnotatedImage';
import type { ImageMetadata, Selected } from 'src/Types';

import './ImageView.css';

interface ImageViewProps {

  image: ImageMetadata;

}

export const ImageView = (props: ImageViewProps) => {

  const annotations = useAnnotations(`annotations/image/${props.image.slug}.json`);

  const [selected, setSelected] = useState<Selected | undefined>();

  const [isRelatedImagesPanelOpen, setRelatedImagesPanelOpen] = useLocalStoreState('diga.images.open', false);
  
  const [isRelatedVersesPanelOpen, setRelatedVersesPanelOpen] = useLocalStoreState('diga.verses.open', false);

  const [search, setSearch] = useState<Annotation[]>([]);

  const onHighlightSearchResult = (a: Annotation) => {
    // TODO
  }

  const onClearSearch = () => {
    // TODO
  }

  return (
    <Annotorious>
      <AnnotoriousHash 
        loaded={Boolean(annotations)} />

      <PageHeader 
        isRelatedImagesOpen={isRelatedImagesPanelOpen}
        isRelatedVersesOpen={isRelatedVersesPanelOpen}
        onToggleRelatedImages={() => setRelatedImagesPanelOpen(open => !open)}
        onToggleRelatedVerses={() => setRelatedVersesPanelOpen(open => !open)}
        onClearSearch={onClearSearch}
        onHighlightSearchResult={onHighlightSearchResult}
        onSearch={setSearch} />

      <div className="view-wrapper">
        <main>
          <AnnotatedImage 
            annotations={annotations as W3CImageAnnotation[]} 
            imageManifest={props.image.manifest}
            isRelatedImagesOpen={isRelatedImagesPanelOpen}
            isRelatedVersesOpen={isRelatedVersesPanelOpen}
            searchResults={search} 
            onSelect={setSelected} 
            onOpenRelatedImages={() => setRelatedImagesPanelOpen(true)} 
            onOpenRelatedVerses={() => setRelatedVersesPanelOpen(true)} />
        </main>

        <div className="drawer-wrapper">
          <RelatedVerses 
            annotation={selected?.annotation}
            open={isRelatedVersesPanelOpen} 
            related={selected?.relatedVerses} 
            onClose={() => setRelatedVersesPanelOpen(false)} />

          <RelatedImages
             annotation={selected?.annotation}
            open={isRelatedImagesPanelOpen} 
            related={selected?.relatedImages} 
            onClose={() => setRelatedImagesPanelOpen(false)} />
        </div>
      </div>
    </Annotorious>
  )

}