import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dir = dirname(fileURLToPath(import.meta.url))

const ajv = new Ajv({ allErrors: true })
addFormats(ajv)

// Pre-load shared sector slug definition so $ref: "sector-slug" resolves in all schemas
const sectorSlugSchema = JSON.parse(readFileSync(join(__dir, 'schemas/sector-slug.schema.json'), 'utf8'))
ajv.addSchema(sectorSlugSchema)

const pairs = [
    ['sectors',      'sector'],
    ['achievements', 'achievement'],
    ['issues',       'issue'],
    ['mistakes',     'mistake'],
    ['promises',     'promise'],
    ['studies',      'study']
]

let failed = false

for (const [dataFile, schemaFile] of pairs) {
  const data   = JSON.parse(readFileSync(join(__dir, `data/${dataFile}.json`), 'utf8'))
  const schema = JSON.parse(readFileSync(join(__dir, `schemas/${schemaFile}.schema.json`), 'utf8'))
  const valid  = ajv.validate(schema, data)

  if (!valid) {
    console.error(`\n❌ ${dataFile}.json failed validation:`)
    ajv.errors.forEach(e => console.error(`  → ${e.instancePath} ${e.message}`))
    failed = true
  } else {
    console.log(`✅ ${dataFile}.json valid`)
  }
}

if (failed) process.exit(1)