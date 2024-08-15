import { CardDashboard } from '@/components/card';
import { ChartOverview } from '@/components/chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

export default function Dashboard() {
  return (
    <>
      <main className='sm:ml-14 p-4'>
        <section className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
          <Card>
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
              <p className='text-base sm:text-lg font-bold'>R$ 45.445</p>
            </CardContent>
          </Card>

          <Card>
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
              <p className='text-base sm:text-lg font-bold'>R$ 45.445</p>
            </CardContent>
          </Card>

          <Card>
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
              <p className='text-base sm:text-lg font-bold'>R$ 45.445</p>
            </CardContent>
          </Card>

          <Card>
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
              <p className='text-base sm:text-lg font-bold'>R$ 45.445</p>
            </CardContent>
          </Card>
        </section>

        <section className='mt-4 flex flex-col md:flex-row gap-4'>
          <ChartOverview />
          <CardDashboard />
        </section>
      </main>
    </>
  )
}