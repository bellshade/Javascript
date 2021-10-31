const html = (route) => (req, reply) => {
  reply.view("runner/htmlViewer");
};

module.exports = html;
