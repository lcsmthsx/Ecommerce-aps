'use client';

import { useForm } from 'react-hook-form';
import Link from 'next/link';
import GeneralCard from '@/components/generalCard';

export default function CadastroPage() {
  const { register, handleSubmit } = useForm();
  function onSub(data) {
    console.log(data);
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <GeneralCard title="Cadastro">
        <form
          onSubmit={handleSubmit(onSub)}
          className="flex flex-col gap-4 text-left"
        >
          <label htmlFor="nome" className="text-sm">
            Nome:
            <input
              id="nome"
              type="text"
              placeholder="Seu nome"
              required
              {...register('name')}
            />
          </label>
          <label htmlFor="email" className="text-sm">
            E-mail:
            <input
              id="email"
              type="text"
              placeholder="Endereço@dominio.com"
              required
              {...register('email')}
            />
          </label>
          <label htmlFor="password" className="text-sm">
            Password:
            <input
              type="password"
              placeholder="Password"
              required
              {...register('password')}
            />
          </label>
          <button type="submit">Cadastrar</button>
          <Link href="/login" className="text-xs text-center">
            Ja possui uma conta? Clique aqui
          </Link>
        </form>
      </GeneralCard>
    </div>
  );
}
