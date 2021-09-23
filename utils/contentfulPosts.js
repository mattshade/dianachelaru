const space = 'raaqi4zh67uq';
const accessToken = '6L3NAIGC33wGiPPyy_yfLIZngTuCNILmAzvZ7Xm6C54';

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchEntries() {
  const entries = await client.getEntries()
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchEntries }
