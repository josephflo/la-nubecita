import Header from '@/components/Header'
import MobileNavigation from '@/components/MobileNavigation'
import SideBar from '@/components/SideBar'
import { getCurrentUser } from '@/lib/actions/user.actions'
import { redirect } from 'next/navigation'

export const dynamic = "force-dynamic";

const layout = async ({children}: {children: React.ReactNode}) => {

  const currentUser = await getCurrentUser();
  if(currentUser) console.log("user founded")
  if(!currentUser) return redirect('/sign-in');

  return (
   <main className='flex h-screen'>
    <SideBar {...currentUser} />
    <section className='flex h-full flex-1 flex-col'>
        <MobileNavigation {...currentUser}/>
        <Header />
      <div className='main-content'>
      {children}
      </div>
    </section>
   </main>
  )
}

export default layout