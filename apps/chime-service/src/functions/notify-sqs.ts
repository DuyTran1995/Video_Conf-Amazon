// Called when SQS receives records of meeting events and logs out those records
export const handler = async (event, _context, callback) => {
  console.log(event.Records);
  return {};
};
