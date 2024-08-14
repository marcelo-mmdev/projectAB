import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from '../ui/button'
import Link from 'next/link'
import { PanelBottom } from 'lucide-react'

export function Sidebar() {
  return(
    <>
      <div className='flex w-full flex-col bg-muted/40'>
        <div className="flex flex-col">
          <header>
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className='sm:hidden'>
                  <PanelBottom className='w-5 h-5'/>
                  <span className='sr-only'>Abrir / Fechar Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav>
                  <Link href="#">
                    <span>Logo</span>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </header>
        </div>
      </div>
    </>
  )
}