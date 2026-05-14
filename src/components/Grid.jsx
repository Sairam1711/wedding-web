import react from 'react'
import '../styles/Grid.css'
import Card from './Card'
export default function Grid() {
    return (
        <div className='grid'>
        <div className="grid-container">
            <Card title='Reception' description='27 may 2026  wednesday  7:00 pm' />
            <Card title='Wedding ' description='28 may 2026 thursday  7: 30 am' />
        </div>
        </div>
    );
}