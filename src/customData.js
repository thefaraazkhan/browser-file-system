const data = {
  name: 'app',
  type: 'folder',
  children: [
    {
      name: 'file1',
      type: 'file',
      size: '106.56MB',
    },
    {
      name: 'file2',
      type: 'file',
      size: '122.50MB',
    },

    {
      name: 'main',
      type: 'folder',
      children: [
        {
          name: 'src',
          type: 'folder',
          children: [
            {
              name: 'file1',
              type: 'file',
              size: '106.56MB',
            },
            {
              name: 'file2',
              type: 'file',
              size: '106.56MB',
            },
            {
              name: 'main',
              type: 'folder',
              children: [
                {
                  name: 'file3',
                  type: 'file',
                  size: '106.56MB',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'components',
      type: 'folder',
      children: [
        { name: 'file1', type: 'file', size: '100.99MB' },
        { name: 'file2', type: 'file', size: '106.56MB' },
        { name: 'file3', type: 'file', size: '306.56MB' },
      ],
    },
  ],
};

export default data;
