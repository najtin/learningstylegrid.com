import Grid from '../components/Grid.vue';
import en_Instructions from '../components/Instructions.vue';
import Inventory from '../components/Inventory.vue';
import de_Instructions from '../components/de/de_Instructions.vue';
import de_Inventory from '../components/de/de_Inventory.vue';
export const routes = [
  {
    path: '/app/en/instructions',
    component: en_Instructions,
  },
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
    path: '/app/de/inventory',
    redirect: '/app/de/inventory/sentence-1',
  },
  {
    path: '/app/inventory',
    redirect: '/app/inventory/sentence-1',
  },
  {
    path: '/app/grid',
    component: Grid,
  },
  {
    path: '/app',
    redirect: '/app/instructions',
  }
];
