import GeneralCard from '@/components/generalCard';
import Input from '@/components/input';
import Button from '@/components/button';
export default function LoginPage() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <GeneralCard title='Entre na sua conta'>
        <form className=' flex flex-col gap-10'>
          <Input type='text' placeholder='Email' />
          <Input type='password' placeholder='Password' />
          <Button>Entrar</Button>
        </form>
      </GeneralCard>
    </div>
  );
}
