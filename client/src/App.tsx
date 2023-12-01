import { ReactElement, useEffect, useState } from 'react'
import { AnalyzerView } from './AnalyzerView';
import { getExerciseIds } from './api';

export function App(): ReactElement {

  const [availableExerciseIds, setAvailableExerciseIds] = useState<number[]>([]);

  const [exerciseId, setExerciseId] = useState(1);

  useEffect(() => {
    getExerciseIds().then((exerciseIds: number[]) => setAvailableExerciseIds(exerciseIds));
  });

  return (
    <>
      <div className="container mx-auto">
        <h1 className="my-2 text-2xl text-center">CorAs Analyzer</h1>

        <h2 className="my-4 text-xl text-center">Aufgabe: {exerciseId} ({JSON.stringify(availableExerciseIds)})</h2>

        <AnalyzerView />
      </div>
    </>
  )
}
