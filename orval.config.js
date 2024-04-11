module.exports = {
  'grax': {
    input: 'grax.yaml',
    output: {
      target: 'graxApi.ts',
      override: {
        mutator: {
          path: 'instance.ts',
          name: 'instance',
        },
      },
    }
  },
}; 