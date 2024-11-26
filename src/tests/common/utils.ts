export const waitFor = async (delay: number, message?: string): Promise<any> => {
  await new Promise(resolve => setTimeout(resolve, delay))
  if (message !== undefined) { console.log(message) }
}
