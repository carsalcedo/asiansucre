import React, {useState} from 'react'
import show1 from '../assets/img/show1.JPG'
import show2 from '../assets/img/show2.JPG'
import show3 from '../assets/img/show3.JPG'
import recorte3 from '../assets/img/recorte3.png'
import kpop from '../assets/img/kpop.JPG'
import a11 from '../assets/img/a11.JPG'
import a12 from '../assets/img/a12.JPG'
import a13 from '../assets/img/a13.JPG'
import FotoCard from './FotoCard'
import ModalGal from './ModalGal';
import {Transition } from '@headlessui/react'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Shows = ({fotos}) => {
    const features = [
        { image: kpop },
        { image: recorte3 },
        { image: show3 },
        { image: show2 },
        { image: show1},
      ]

    const [open, setOpen] = useState(false);
    const [ima, setIma] = useState('');

    const openModal = (image) => {
        setIma(image);
        setOpen(true);
    };
    return (
        <div className="container mx-auto my-20 px-4 relative  overflow-hidden rounded-lg bg-opacity-25" id='begin'>
          <div className='bg-gradient-to-r from-yellow-300 to-yellow-500 p-10 rounded-xl'>
              <h1 className='my-4 text-4xl tracking-tight font-bold text-red-700 sm:text-5xl md:text-6xl transition duration-700 ease-in-out'>
                  Shows de Maids en vivo</h1>
                  <img onClick={() => openModal(features.image = show1)} src={features.image = show1} alt="" className='sm:float-right sm:w-72 sm:h-auto sm:ml-4 rounded-xl' />
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '>  Uno de los atractivos mas visuales de nuestros eventos han sido nuestras Maids.  Lindas y simpaticas chicas vestidas con traje de cridada al estilo bitoriano, dispuesta a ofrecer sus mas cordiales y sutiles servicios para el bien estar de sus amo.
              </p>
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '>  Las maids cafés son básicamente cafeterías, aunque en estos lugares las meseras son conocidas como maids y visten trajes que son una fusión entre los uniformes de las sirvientas francesas del siglo 19 y los vestidos que usan las heroínas de los animes. En ocasiones puede incluir una gargantilla, una diadema con orejas de gato o conejo, una cola de gato y otras cosas más que tengan que ver con gatos. Además del vestuario, las meseras tienen que actuar como si los clientes fueran sus "amos" o "señores" y atenderlos como si estos regresaran a casa después de un largo viaje o algo así.
             </p>
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '>
              Por supuesto, no puede faltar la comida, los postres y el café. Aunque la comida es lo menos importante en estos lugares, no por eso deja de ser buena. Dependiendo del café, puede ser comida japonesa —como sushi, onigiris, takoyakis, ramen, calpis y té verde— o puede ser comida más básica —sándwiches, papas, refrescos o malteadas—. Lo principal aquí son los postres y no por el sabor, sino por la manera en que se sirven. Las maids preparan tus postres y los decoran con dibujitos tiernos de corazones, gatitos, conejitos, ositos, totoros, doraemons y hasta dedicatorias. Además, cuando te lo entregan, lo hacen con todo su amor para que sepa mejor. Claro.
               </p>
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '>
              En estos cafés suele haber karaokes, juegos de mesa y videojuegos para que el cliente cante y juegue con las maids o sus amigos. A veces hay espectáculos en los que las meseras cantan y bailan para entretener a los clientes y hasta hay catálogos para que ellos escojan qué película o anime quieren ver.
              </p>
          </div>
          <div className='my-4 bg-gradient-to-r from-yellow-300 to-yellow-500 p-10 rounded-xl'>
              <h1 className='my-4 text-4xl tracking-tight font-bold text-red-700 sm:text-5xl md:text-6xl transition duration-700 ease-in-out'>
                  Shows de Música</h1>
                  <img onClick={() => openModal(features.image = show2)} src={features.image = show2} alt="" className='sm:float-left sm:w-72 lg:w-80 sm:h-auto sm:mr-4 rounded-xl' />
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '> Los talentos siempre dan a aflorar en neustros eventos, el arte y la música son uno de ellos, con canciones en vivo de los temas animés mas populares, al igual que temas kpop en su propio idioma koreano.
              </p>
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '> Existen los shows como parte del entretenimento que ofrecen neustros eventos Asian Sucre, al igual que las competiciones para elegir a la mejor voz en el torneo de Karaoke.  La apreciacion del público es la que elije cual talento es el mejor y pueden disfrutar de exelentes premios.
             </p>
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '> Todos hemos llegado a ese momento, el estrés y la adrenalina se apoderan de nuestros cuerpos y la duda surge en nuestras cabezas como un martilleo constante, ¿qué opening va mejor conmigo y no quedar mal? Y es que para nosotros los seguidores del anime, es inevitable no cantar nuestros openings o endings favoritos, ya sea por épicos, por cariño a la serie o porque la letra nos transmite algo. Todo ello en conjunto hace manar un set de openings personales, esos que nos ponen la piel de gallina, y no se preocupen al final no hace falta tener una voz a veces tan prodigiosa como la de un César Franco o una Nana Mizuki, lo importante es disfrutar el momento y dar nuestro mejor espectáculo.
             </p>
          </div>
          <div className='my-4 bg-gradient-to-r from-yellow-300 to-yellow-500 p-10 rounded-xl'>
              <h1 className='my-4 text-4xl tracking-tight font-bold text-red-700 sm:text-5xl md:text-6xl transition duration-700 ease-in-out'>
                  Exhibición talento Geisha</h1>
                  <img onClick={() => openModal(features.image = show3)} src={features.image = show3} alt="" className='sm:float-right sm:w-72 lg:w-80 sm:h-auto sm:ml-4 rounded-xl' />
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '> Las geishas no son prostitutas. Lo afirman ellas de manera tajante y lo corroboran las leyes japonesas. En 1958, tras prohibirse oficialmente la prostitución en Japón, muchos burdeles se camuflaron tras la etiqueta de spas o baños turcos.
              </p>
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '> Las geishas y maikos (aprendices de geishas) son una de las imágenes más icónicas de Japón y por eso hablaré de ellas en este artículo a modo de introducción.
             </p>
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '> Dedicadas de por vida a las artes tradicionales japonesas, su labor consiste en entretener y hacer compañía a sus clientes durante espectáculos o banquetes, bailando, cantando, recitando poesía, sirviendo el té o simplemente charlando de una manera divertida y delicada.
             </p>
          </div>
          <div className='my-4 bg-gradient-to-r from-yellow-300 to-yellow-500 p-10 rounded-xl'>
              <h1 className='my-4 text-4xl tracking-tight font-bold text-red-700 sm:text-5xl md:text-6xl transition duration-700 ease-in-out'>
                  Exhibición de artes marciales</h1>
                  <img onClick={() => openModal(features.image = recorte3)} src={features.image = recorte3} alt="" className='sm:float-left sm:w-72 lg:w-80 sm:h-auto sm:mr-4 rounded-xl' />
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '> Las Artes marciales japonesas se refieren a la enorme variedad de artes marciales de los nativos de Japón. Por lo menos tres términos japoneses a menudo se utilizan indistintamente con la frase "artes marciales japonesas": "Budō", que literalmente significa "camino marcial", "bujutsu" (武術), que no tiene traducción perfecta, pero significa algo así como ciencia, el arte, o el arte de la guerra, y "bugei" (武芸), que literalmente significa "arte marcial".
              </p>
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '> El wushu es a la vez una exposición y un deporte de contacto completo derivado de las artes marciales chinas tradicionales1​2​ Fue desarrollado en China a partir de 1949, en un esfuerzo para estandarizar la práctica de las artes marciales tradicionales chinas,3​ si bien los intentos de estructurar las diversas tradiciones de artes marciales descentralizados se remontan a tiempo atrás, cuando el Instituto Central Guoshu se estableció en Nankín en 1928. El término wushu es la palabra china para 'artes marciales' (武 wu = 'militar' o 'marcial'; 术 shu = 'arte'). Actualmente, el wushu se ha convertido en un deporte internacional a través de la Federación Internacional de Wushu (IWUF),
             </p>
          </div>
          <div className='my-4 bg-gradient-to-r from-yellow-300 to-yellow-500 p-10 rounded-xl'>
              <h1 className='my-4 text-4xl tracking-tight font-bold text-red-700 sm:text-5xl md:text-6xl transition duration-700 ease-in-out'>
                  Cover Dance Kpop</h1>
                  <img onClick={() => openModal(features.image = kpop)} src={features.image = kpop} alt="" className='sm:float-right sm:w-72 lg:w-80 sm:h-auto sm:ml-4 rounded-xl' />
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '> El Kpop es un género musical que incluye diversos estilos como el pop, hip hop, EDM, rock o R&B, y que se refiere específicamente a la música popular de Corea del Sur,2​ debido a que Corea del Norte no posee una industria de música popular con influencia occidental
              </p>
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '>La relación del K-pop con la cosmética coreana es innegable, numerosos idols son imagen de un gran número de marcas de cosmética que inundan el país. En Corea del Sur el uso de la cosmética no solo se cierra al mercado femenino, sino que es usada también por hombres, estos se preocupan de su aspecto tanto como las mujeres. En los últimos años la cosmética coreana está traspasando fronteras llegando hasta otros muchos países en forma de tiendas especializadas, como es el caso de Korean Queens, la primera tienda española en línea especializada en la venta de cosmética coreana.
             </p>
          </div>

          <h1 className='my-6 text-4xl text-center tracking-tight font-bold text-yellow-400 sm:text-5xl md:text-6xl transition duration-700 ease-in-out'>
                  Agrupaciones regionales de cover KPOP</h1>

           <div className="px-5 grid grid-cols-2 md:px-20 md:grid-cols-3 gap-2">
            {fotos.map((foto) =>
               <FotoCard key={foto.id} foto={foto} openModal={openModal}/>
            )}
            </div>

            <div class="flex justify-end mt-4">
                <a href="#begin">
                    <button type="button" className="ml-2 bg-gray-800 h-10 w-10 p-1 rounded-full text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <FontAwesomeIcon  icon={faArrowUp} size='lg'/>
                    </button>
                </a>
            </div>

            <Transition.Root show={open} as={'div'}>
                <ModalGal ima={ima} setOpen={setOpen}/>
           </Transition.Root>
        </div>
    )
}

export default Shows
