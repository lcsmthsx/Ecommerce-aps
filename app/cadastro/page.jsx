import Link from 'next/link';
import GeneralCard from '@/components/generalCard';
import Input from '@/components/input';
import Button from '@/components/button';

export default function LoginPage() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <GeneralCard title='Login'>
        <form className=' flex flex-col gap-4 text-left'>
          <label htmlFor='nome' className='text-sm'>
            Nome:
            <Input id='nome' type='text' placeholder='Seu nome' />
          </label>
          <label htmlFor='email' className='text-sm'>
            E-mail:
            <Input id='email' type='text' placeholder='Endereço@dominio.com' />
          </label>
          <label htmlFor='password' className='text-sm'>
            Password:
            <Input id='password' type='password' placeholder='Password' />
          </label>
          <Button>Cadastrar</Button>
          <Link href='/login' className='text-xs text-center'>
            Ja possui uma conta? Clique aqui
          </Link>
        </form>
      </GeneralCard>
    </div>
  );
}
