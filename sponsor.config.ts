import { defineConfig, tierPresets } from 'sponsorkit';

export default defineConfig({
  renderer: 'tiers',
  formats: ['svg', 'png'],
  tiers: [
    // Past sponsors, currently only supports GitHub
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    // Default tier
    {
      title: 'Backers',
      preset: tierPresets.base,
    },
    {
      title: 'Supporters',
      monthlyDollars: 25,
      preset: tierPresets.small,
    },
    {
      title: 'Top supporters',
      monthlyDollars: 50,
      preset: tierPresets.medium,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 100,
      preset: tierPresets.large,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 256,
      preset: tierPresets.xl,
    },
  ],
});
