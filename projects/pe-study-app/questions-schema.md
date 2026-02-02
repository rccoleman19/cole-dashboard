# PE Control Systems Question Schema

## Question Structure
```typescript
interface Question {
  id: string;
  domain: 'measurement' | 'control-systems' | 'final-control' | 'signals-networking' | 'safety-systems';
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  references: string[];
  tags: string[];
}
```

## Domain Breakdown (Based on NCEES Exam Specs)
1. **Measurement** (~20% of exam)
2. **Control Systems** (~30% of exam)
3. **Final Control Elements** (~20% of exam)
4. **Signals, Transmission, and Networking** (~15% of exam)
5. **Safety Systems** (~15% of exam)

## MVP Question Target
- **Total: 100 questions** (lean version)
- Measurement: 20 questions
- Control Systems: 30 questions
- Final Control Elements: 20 questions
- Signals/Networking: 15 questions
- Safety Systems: 15 questions

## Difficulty Distribution
- Easy: 30% (30 questions) - fundamental concepts
- Medium: 50% (50 questions) - application problems
- Hard: 20% (20 questions) - complex scenarios
