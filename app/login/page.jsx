import Link from 'next/link';
import { BsFacebook, BsGoogle, BsTwitch } from 'react-icons/bs';
import GeneralCard from '@/components/generalCard.jsx';
import Input from '@/components/input.jsx';
import Button from '@/components/buttonSubmit.jsx';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <GeneralCard title="Login">
        <form className=" flex flex-col gap-4 text-left">
          <Input id="email" type="text" placeholder="Endereço@dominio.com" />
          <Input id="password" type="password" placeholder="Password" />
          <Button>Entrar</Button>
          <div className="flex flex-wrap gap-5 justify-center items-center">
            <BsFacebook className="scale-150" />
            <BsGoogle className="scale-150" />
            <BsTwitch className="scale-150" />
          </div>
          <div className="text-xs text-center">
            <p>Não possui conta? </p>
            <Link href="/cadastro" className="">
              Clique aqui
            </Link>
          </div>
        </form>
      </GeneralCard>
    </div>
  );
}
