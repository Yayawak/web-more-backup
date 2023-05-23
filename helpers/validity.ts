export function isNumeric(string: string) : boolean
{
  // return !isNaN(string)
  return !isNaN(parseFloat(string));
}
// export function isDigit(string: string) :
