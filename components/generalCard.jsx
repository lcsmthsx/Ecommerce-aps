export default function GeneralCard({ title, children }) {
  return (
    <div className='h-80 w-60 rounded-md shadow-lg bg-primary text-center p-4'>
      <h4 className='py-6'>{title}</h4>
      {children}
    </div>
  );
}
