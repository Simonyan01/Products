import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { paths } from '@helpers/route.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={paths} />
)
