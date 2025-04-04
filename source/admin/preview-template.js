CMS.registerPreviewTemplate('blog', ({ entry, widgetFor }) => (
    <div className="blog-post">
      <h1>{entry.getIn(['data', 'title'])}</h1>
      <p>Published on: {entry.getIn(['data', 'date'])}</p>
      <div className="content">{widgetFor('body')}</div>
    </div>
  ));
  