export function addSpacesToCamelCase(str: string) {
  if (!str || typeof str !== 'string') return '';
  return str.replace(/([a-z])([A-Z])/g, '$1 $2');
}