import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '#',
    priceMonthly: '$19',
    description: 'Perfect for individuals looking to get actionable insights and improve their game.',
    features: [
      'Basic match analysis',
      'Track up to 500 strokes per month',
      'Personal progress reports',
      'Earn achievements',
      'Community leaderboard access',
      'Email support with 72-hour response time'
    ],
    mostPopular: false,
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    href: '#',
    priceMonthly: '$39',
    description: 'Ideal for competitive players seeking advanced analytics and social features.',
    features: [
      'Advanced AI analysis',
      'Track up to 2,000 strokes per month',
      'In-depth progress timelines and heatmaps',
      'Share & compare stats with friends',
      'Priority email support with 48-hour response time'
    ],
    mostPopular: true,
  },
  {
    name: 'Elite',
    id: 'tier-elite',
    href: '#',
    priceMonthly: '$59',
    description: 'Unlimited access and personalized features for the tennis enthusiast.',
    features: [
      'Unlimited stroke tracking',
      'AI game simulation features',
      'Personalized coaching insights',
      'Access to online clinics',
      'Live chat support with 24-hour response time'
    ],
    mostPopular: false,
  },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function PricingPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose the right plan for you
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-gray-600">
            Elevate your game with the precision of AI. Each plan is designed to match your commitment to improving on the court.
          </p>
        </div>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'border-2 border-indigo-600' : '',
                'flex flex-col rounded-3xl bg-white p-8 shadow-md ring-1 ring-gray-200 xl:p-10'
              )}
            >
              <div>
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'text-indigo-600' : 'text-gray-900',
                    'text-lg font-semibold leading-8'
                  )}
                >
                  {tier.name}
                </h3>
                {/* {tier.mostPopular && (
                  <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                    Most popular
                  </p>
                )} */}
                <p className="mt-4 text-sm text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline text-4xl font-bold tracking-tight text-gray-900">
                  {tier.priceMonthly}
                  <span className="ml-1 text-lg font-semibold text-gray-600">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                      <span className="ml-3 text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular ? 'mt-8 w-full bg-indigo-600 text-white' : 'mt-8 w-full text-indigo-600',
                  'block rounded-md py-2 text-center text-sm font-semibold leading-6 ring-1 ring-inset ring-indigo-200 hover:bg-indigo-50'
                )}
              >
                Coming soon.
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}