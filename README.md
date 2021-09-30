# How Busy Is Town

## To Run Website Locally

- clone repo
- npm install
- npm run dev

If this fails:
Inside .env files, replace CONTENTFUL_ACCESS_TOKEN with your new Contentful Access token.

## Structure:

- Atom Methodology

- Created With Gatsby

- Content Editable with Contentful

  - Inside .env files, replace CONTENTFUL_ACCESS_TOKEN with your new Contentful Access token.

- [Emojicom Ratings found here](https://emojicom.io/report/CeaqsIJ2ffeo5lrlG1ym)
  - To Replace Emojicom Campaign open src/components/molecules/FloatingFeedback/index.js
  - <EmojicomWidget campaignId={place new campaign Id Here} />

Note: Make sure when creating a new campaign that the Embed type is equal to 'Floating'. If this setting is not selected, the Emojicom won't appear.

## To Edit Contentful Content (Articles/Sections)

https://app.contentful.com/spaces/hk6oui71f47k/entries?id=O2aP4gJdNKjbcGGd&searchText=%20&order.fieldId=updatedAt&order.direction=descending&displayedFieldIds=contentType&displayedFieldIds=updatedAt&displayedFieldIds=author

- Select Content from the space 'How Busy Is Town Content'
- Edit content
- Publish Changes

#### Accesibility

When changing images, try to be descriptive in the description, this will be used for Accessibility reasons. This will be used as a placeholder to allow screen readers to understand what's the image representing.

#### Content Model

Content is organized via page and as its own section.
In the content description, you will find corresponding pages that the content appears on.

## Scripts

With the old website, there are scripts (python) that access lots of different APIs and creates a JSON file.

- https://howbusyistoon.com/ncc-car-parks.json
- https://howbusyistoon.com/ncc-city-state.json

once the scripts are running, replace the fetch URL with the path to the newly generated scripts

- src/components/atoms/calloutData
  fetch(`https://howbusyistoon.com/ncc-city-state.json`)
  fetch( _new cityState path here_ )
- src/components/templates/Parking
  fetch(`https://howbusyistoon.com/ncc-car-parks.json`)
  fetch( _new carPark path here_ )

## Closed For Maintenance

To Put the Site in a Closed for Maintenance state , you need to configure
` const IsThisSiteClosedForMaintenece = true;`
to Revert , change value to false
This is located inside

- src/components/layout.js
