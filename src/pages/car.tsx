import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import CarShow from '@/components/CarShow';

export default function Car() {
  return (
    <div className='h-screen'>
      <Suspense>
        <Canvas>
          <CarShow />
        </Canvas>
      </Suspense>
    </div>
  );
}
