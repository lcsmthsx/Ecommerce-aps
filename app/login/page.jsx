import Link from 'next/link';
import GeneralCard from '@/components/generalCard';
import Input from '@/components/input';
import Button from '@/components/button';
import { BsFacebook, BsGoogle, BsTwitch } from 'react-icons/bs';
export default function LoginPage() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <GeneralCard title='Login'>
        <form className=' flex flex-col gap-4 text-left'>
          <label htmlFor='email' className='text-sm'>
            E-mail:
            <Input id='email' type='text' placeholder='Endereço@dominio.com' />
          </label>
          <label htmlFor='password' className='text-sm'>
            Password:
            <Input id='password' type='password' placeholder='Password' />
          </label>
          <Button>Entrar</Button>
          <div className='flex flex-wrap gap-5 justify-center items-center'>
            <label htmlFor='' className='text-sm'>
              Entre com:
            </label>{' '}
            <BsFacebook className='scale-150' />
            <BsGoogle className='scale-150' />
            <BsTwitch className='scale-150' />
          </div>
          <div className='text-xs text-center'>
            <p>Não possui conta? </p>
            <Link href='/cadastro' className=''>
              Clique aqui
            </Link>
          </div>
        </form>
      </GeneralCard>
    </div>
  );
}
