import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'A quoi m’engage une démonstration de l’application ?',
      answer:
        'La démonstration de l’application n’engage à rien. Elle vous permet de découvrir ce que nous faisons et de comprendre en quoi l’application peut vous aider au quotidien.',
    },
    {
      question: 'Combien de temps dois-je prévoir pour une démonstration ?',
      answer: 'Le temps de démonstration est variable. Une démonstration se déroule en général en 3 temps : 1) discussion sur vos méthodes actuelles 2) démonstration de l’outil 3) discussion ouverte sur l’outil.',
    },
    {
      question: 'Pourrai-je avoir, à l’issue de la présentation, des codes d’accès pour essayer l’application de mon côté ?',
      answer:
        'Bien sûr, après la démonstration et si cela vous intéresse, nous vous transmettrons des identifiants d’accès en mode "bac à sable", avec plusieurs réseaux de test et bien évidemment la possibilité d’y intégrer vos réseaux réels et futurs.',
    },

    {
      question: 'Qui peut utiliser cette application ?',
      answer:
        'Cette application est destinée à toute personne en charge de répondre aux appels d’offre. Selon la taille de l’entreprise, il peut s’agir du dirigeant directement, de l’équipe développement ou encore de l’équipe d’exploitation.',
    },
    {
      question:
        'Je suis un professionnel AMO, puis-je utiliser votre outil dans l’accompagnement de mes clients ?',
      answer:
        'Bien sûr. Contactez nous pour en savoir plus.',
    },
    {
      question:
        'Je suis une collectivité, puis-je utiliser votre outil ?',
      answer:
        'Bien sûr. Contactez nous pour en savoir plus.',
    },

    {
      question: 'Cette application est-elle destinée à du transport urbain ou inter-urbain ?',
      answer:
        'Cette application a été développée pour pouvoir répondre à ces deux typologies de transport.',
    },
    {
      question: 'Puis-je répondre à plusieurs appels d’offre simultanément ?',
      answer: 'Oui, il n’y a pas de restriction sur le nombre d’appels d’offre en simultanée.',
    },

  ],
  [

    {
      question: 'Suis-je limité en nombre de véhicules ou de conducteurs par appel d’offre ?',
      answer:
        'Non, il n’existe pas de limitation de ce type.',
    },
    {
      question: 'J’ai des règles de coupures ou autres spécifiques à mon entreprise, est-il possible de les prendre en compte ?',
      answer:
        'Oui, nous avons développé un système assez ouvert pour prendre en compte le plus de cas possibles. Contactez-nous s’il y a des points bloquants.',
    },
    {
      question: 'Je ne réponds pas cette année à des appels d’offre mais j’aimerais utiliser votre plateforme pour optimiser mon réseau existant, est-ce possible ?',
      answer: 'Evidemment, notre application peut permettre d’optimiser n’importe quel réseau : un réseau que vous souhaitez gagner ou un réseau que vous exploitez déjà.',
    },
    {
      question: 'J’ai un GTFS de mon réseau, puis-je l’importer ?',
      answer:
        'Cette option n’est pas encore disponible.',
    },
    {
      question: 'Puis-je exporter en GTFS un réseau graphiqué avec l’application ?',
      answer:
        'Cette option n’est pas encore disponible.',
    },
    {
      question: 'Est-il possible de se faire assister par vos équipes dans la réponse à appel d’offre ?',
      answer: 'Non, nous ne proposons pas d’offre d’accompagnement.',
    },
    {
      question: 'Où sont hébergés mes données ?',
      answer:
        'Vos données sont hébergées sont un serveur français situé dans la région parisienne.',
    },
    {
      question: 'Puis-je récupérer mes données si je décide de ne plus utiliser la plateforme ?',
      answer:
        'Toutes les données que vous produisez sur notre application vous appartiennent et sont disponibles à tout moment en téléchargement.',
    },

  ],
  [

    {
      question: 'Si je décide de quitter la plateforme, mes données sont-elles supprimées ?',
      answer: 'Si vous quittez la plateforme, et à réception de votre demande, nous supprimons définitivement l’intégralité de vos données de nos serveurs.',
    },
    {
      question: 'L’application est-elle appelée à évoluer ?',
      answer:
        'L’application est aujourd’hui en beta, c’est-à-dire qu’elle est en cours de développement et en est plutôt à une version initiale. Elle va donc évoluer fortement dans les prochaines semaines et mois. Des fonctions vont disparaître, d’autres être intégrées.',
    },
    // {
    //   question: 'Combien coûte un abonnement à Display ?',
    //   answer:
    //     'Pour l’instant, ce point n’est pas défini. L’application est encore en beta et nous cherchons dans un premier temps à travailler avec nos utilisateurs cibles pour la rendre la plus pertinente possible.',
    // },
    // {
    //   question: 'Je suis une startup du transport, existe-t-il un tarif spécifique ?',
    //   answer: 'A date, il n’y a pas de tarif spécifique.',
    // },
    {
      question: 'Je suis une entreprise technologique du transport, existe-t-il un moyen de se connecter à votre application via une API ?',
      answer:
        'Non, il n’existe pas encore d’API.',
    },
    {
      question: 'Mes données sont-elles récupérées à des fins d’analyse ?',
      answer:
        'Oui, cela est possible. Ceci dit, il convient ici de préciser que dans ce cas, vos données sont anonymisées.',
    },
    {
      question: 'Ce projet est-il lié à un groupe ou à une entreprise spécifique du transport ?',
      answer: 'Non, ce projet est issu de l’expérience d’anciens du monde du transport mais n’est en relation avec aucun groupe ou aucune entreprise du secteur.',
    },
    {
      question: 'Votre projet m’intéresse, comment participer ?',
      answer:
        'Connectez-nous par email au xxx@xxxx.xx afin de faire connaissance.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Questions Fréquemment Posées
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Si vous ne trouvez pas les réponses à vos questions, contactez par email nos équipes.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
