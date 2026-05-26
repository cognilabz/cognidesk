# Use Nunjucks for prompt templates

`@cognidesk/model` will use Nunjucks internally as its Jinja-compatible Prompt Template Renderer. This gives prompt authors familiar Jinja-style markdown templates with strict missing-field behavior while keeping renderer-specific APIs out of Cognidesk's public model surface.
