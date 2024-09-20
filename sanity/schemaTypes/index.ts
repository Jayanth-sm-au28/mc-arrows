import { type SchemaTypeDefinition } from 'sanity'
import { post } from './post'
import { author } from './author'
import { tag } from './tag'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post,author,tag],
}
