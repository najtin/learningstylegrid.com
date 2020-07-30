import en_Grid from '../components/en/en_Grid.vue';
import en_Instructions from '../components/en/en_Instructions.vue';
import en_Inventory from '../components/en/en_Inventory.vue';
import de_Instructions from '../components/de/de_Instructions.vue';
import de_Inventory from '../components/de/de_Inventory.vue';
import de_Grid from '../components/de/de_Grid.vue';
export const routes = [
  //german /de
  {
    path: '/app/de/instructions',
    component: de_Instructions,
  },
  {
    path: '/app/de/inventory/sentence-:sentenceNumber',
    component: de_Inventory,
    props: ({ params }) => ({
      sentenceNumber: parseInt(params.sentenceNumber, 10),
    }),
  },
  {
    path: '/app/de/grid',
    component: de_Grid,
  },
  {
    path: '/app/de/inventory',
    redirect: '/app/de/inventory/sentence-1',
  },
  //english /en
  {
    path: '/app/en/instructions',
    component: en_Instructions,
  },
  {
    path: '/app/en/inventory/sentence-:sentenceNumber',
    component: en_Inventory,
    props: ({ params }) => ({
      sentenceNumber: parseInt(params.sentenceNumber, 10),
    }),
  },
  {
    path: '/app/en/grid',
    component: en_Grid,
  },
  {
    path: '/app/en/inventory',
    redirect: '/app/en/inventory/sentence-1',
  },

  //general
  {
    path: '/app',
    redirect: '/app/de/instructions',
  }
];
