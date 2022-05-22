import { Magazine } from '../../models/magazines.models';

export const createMagazine = ({ id = '', name = '' } = {}): Magazine => ({
  id,
  name: name || `name-${id}`,
  issues: [
    {
      id: '5d7ed232-d2e5-4254-a367-1369b042bb02',
      month: 8,
      year: 2021,
      articles: [
        {
          id: 'ec61b1ed-a235-44a2-bfea-9f8c8fe8937e',
          title: 'Article A',
          textContent: 'Text Content A',
          images: [
            {
              id: 'cd43b307-665e-4f27-9df0-033cdac2dc9c',
              fileName: 'assets/img/placeholder.png',
              caption: 'Caption A',
            },
            {
              id: 'e09585c1-0772-4517-b394-eacbda159b1d',
              fileName: 'assets/img/placeholder.png',
              caption: 'Caption B',
            },
          ],
        },
        {
          id: 'abf0169a-aac4-40af-819b-4865c6518d1c',
          title: 'Article B',
          textContent: 'Text Content B',
          images: [
            {
              id: '3a507675-36d2-48a6-b655-6a106ff50c6e',
              fileName: 'assets/img/placeholder.png',
              caption: 'Caption C',
            },
            {
              id: '721b5cd7-cdb2-4463-833c-8d06b4705cca',
              fileName: 'assets/img/placeholder.png',
              caption: 'Caption D',
            },
          ],
        },
      ],
    },
    {
      id: '7f170ffe-0403-4f05-a357-87073ba65bc2',
      month: 9,
      year: 2021,
      articles: [
        {
          id: 'cd4ca9ca-1b72-43c7-9224-44df49fa5e31',
          title: 'Article C',
          textContent: 'Text Content C',
          images: [
            {
              id: 'a3a6e1cf-1b1b-45ac-b3db-d248acf289da',
              fileName: 'assets/img/placeholder.png',
              caption: 'Caption E',
            },
            {
              id: 'e4c2ac87-1134-4980-aa4f-0dd47490cfd8',
              fileName: 'assets/img/placeholder.png',
              caption: 'Caption F',
            },
          ],
        },
        {
          id: '911e6321-af48-411c-bdfe-d3d9e9595d20',
          title: 'Article D',
          textContent: 'Text Content D',
          images: [
            {
              id: 'a61914ba-ce9b-4124-812f-c92676f6c939',
              fileName: 'assets/img/placeholder.png',
              caption: 'Caption G',
            },
            {
              id: 'f84c4876-8985-48af-a100-3b66b6c8d79e',
              fileName: 'assets/img/placeholder.png',
              caption: 'Caption H',
            },
          ],
        },
      ],
    },
  ],
});
