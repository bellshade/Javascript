const node = (route) => (req, reply) => {
  reply.view("runner/nodeViewer");
};

module.exports = node;
