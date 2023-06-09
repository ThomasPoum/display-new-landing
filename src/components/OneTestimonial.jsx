import { StarIcon } from '@heroicons/react/20/solid'
import avatar from '@/images/avatars/pierre.jpeg'
import Image from 'next/image'


export function OneTestimonial() {
  return (
    <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <figure className="mx-auto max-w-2xl">
        <p className="sr-only">5 out of 5 stars</p>
        <div className="flex gap-x-1 text-blue-600">
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
        </div>
        <blockquote className="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
          <p>
          "Cette application nous a permis de gagner un temps important lors des réponses à appel d&apos;offre. En plus, même avec une équipe réduite, le travail abattu par l&apos;application permet de se positionner sur des appels d&apos;offre plus importants."
          </p>
        </blockquote>
            <figcaption className="mt-10 flex items-center gap-x-6">
            <div className="overflow-hidden rounded-full bg-slate-50">
                <Image
                    className="h-14 w-14 object-cover"
                    src={avatar}
                    alt=""
                    width={56}
                    height={56}
                />
            </div>
          <div className="text-sm leading-6">
            <div className="font-semibold text-gray-900">Pierre Poumarede</div>
            <div className="mt-0.5 text-gray-600">ex-PDG d'Avenir Atlantique</div>
          </div>
        </figcaption>
      </figure>
    </section>
  )
}
