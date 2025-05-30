import type { Schema, Struct } from '@strapi/strapi';

export interface HomeSectionOne extends Struct.ComponentSchema {
  collectionName: 'components_home_section_ones';
  info: {
    displayName: 'Section one';
    icon: 'collapse';
  };
  attributes: {
    Content: Schema.Attribute.RichText;
    Headline: Schema.Attribute.String;
    Image1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Image2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Image3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedEuro extends Struct.ComponentSchema {
  collectionName: 'components_shared_euros';
  info: {
    displayName: 'Euro';
    icon: 'bell';
  };
  attributes: {
    PayPalPrice: Schema.Attribute.String;
    StripePrice: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPrice extends Struct.ComponentSchema {
  collectionName: 'components_shared_prices';
  info: {
    displayName: 'Price';
    icon: 'grid';
  };
  attributes: {
    Euro: Schema.Attribute.Component<'shared.euro', false>;
    USD: Schema.Attribute.Component<'shared.usd', false>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedUsd extends Struct.ComponentSchema {
  collectionName: 'components_shared_usds';
  info: {
    displayName: 'USD';
    icon: 'chartPie';
  };
  attributes: {
    PayPalPrice: Schema.Attribute.String;
    StripePrice: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.section-one': HomeSectionOne;
      'shared.euro': SharedEuro;
      'shared.media': SharedMedia;
      'shared.price': SharedPrice;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.usd': SharedUsd;
    }
  }
}
