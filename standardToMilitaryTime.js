function timeConversion(s) {
  // Write your code here

  const parts = s.split(':')
  let result = s
  if (parts[2].includes('PM')) {
      const newPart = parts[0] === '12' ? '12' : parseInt(parts[0]) + 12
      result = s.replace(parts[0], newPart)
  }
  else {
      if (parts[0] === '12') {
          result = s.replace(parts[0], '00')
      }
  }
  result = result.substr(0, result.length - 2)
  return result
}