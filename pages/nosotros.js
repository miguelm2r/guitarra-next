import Image from 'next/image'
import Layout from '@/components/layout'
import styles from '../styles/nosotros.module.css'
export default function Nosotros() {
  return (
    <Layout
        title={'Nosotros'}
        description={'Sobre nosotros, GuitarLA, Tienda de música'}
    >
        <main className='contenedor'>
            <h1 className='heading'>Nosotros</h1>

            <div className={styles.contenido}>
                <Image src="/img/nosotros.jpg" width={1000} height={800} alt='Imagen sobre nosotros'/>

                <div>
                    <p>Phasellus mi neque, aliquam sed tempor et, cursus vitae lorem. Phasellus iaculis urna tortor, nec imperdiet leo dignissim placerat. Pellentesque pretium dolor nec elit tincidunt cursus.</p>
                    <p>Ut dolor ligula, scelerisque sed pulvinar sit amet, aliquam et odio. Phasellus eget risus eleifend metus porttitor auctor.</p>
                </div>
            </div>
        </main>
    </Layout>
  )
}
