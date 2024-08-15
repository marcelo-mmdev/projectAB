import { DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export function CardDashboard() {
  return(
    <>
      <Card className='flex-1'>
        <CardHeader>
          <div className='flex items-center justify-center'>
            <CardTitle className='text-lg sm:text-xl text-gray-600 select-none'>
              Total de Alarmes
            </CardTitle>
            <DollarSign className='ml-auto w-4 h-4'/>
          </div>
          <CardDescription>
            total de alarmes
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <article className='flex items-center gap-2 border-b py-2'>
            <Avatar className='w-8 h-8'>
              <AvatarImage src="https://github.com/marcelo-mmdev.png" />
              <AvatarFallback>MMdev</AvatarFallback>
            </Avatar>
            <div>
              <p className='text-sm sm:text-base font-semibold'>Marcelo</p>
              <span className='text-[12px] sm:text-sm text-gray-400'>marcelo@gmail.com</span>
            </div>
          </article>

          <article className='flex items-center gap-2 border-b py-2'>
            <Avatar className='w-8 h-8'>
              <AvatarImage src="https://github.com/marcelo-mmdev.png" />
              <AvatarFallback>MMdev</AvatarFallback>
            </Avatar>
            <div>
              <p className='text-sm sm:text-base font-semibold'>Marcelo</p>
              <span className='text-[12px] sm:text-sm text-gray-400'>marcelo@gmail.com</span>
            </div>
          </article>

          <article className='flex items-center gap-2 border-b py-2'>
            <Avatar className='w-8 h-8'>
              <AvatarImage src="https://github.com/marcelo-mmdev.png" />
              <AvatarFallback>MMdev</AvatarFallback>
            </Avatar>
            <div>
              <p className='text-sm sm:text-base font-semibold'>Marcelo</p>
              <span className='text-[12px] sm:text-sm text-gray-400'>marcelo@gmail.com</span>
            </div>
          </article>

          <article className='flex items-center gap-2 border-b py-2'>
            <Avatar className='w-8 h-8'>
              <AvatarImage src="https://github.com/marcelo-mmdev.png" />
              <AvatarFallback>MMdev</AvatarFallback>
            </Avatar>
            <div>
              <p className='text-sm sm:text-base font-semibold'>Marcelo</p>
              <span className='text-[12px] sm:text-sm text-gray-400'>marcelo@gmail.com</span>
            </div>
          </article>
        </CardContent>
      </Card>
    </>
  )
}