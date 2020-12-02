// Called when EventBridge receives a meeting event and logs out the event
export const handler = async (event, _context, callback) => {
  console.log(event);
  return {};
};
