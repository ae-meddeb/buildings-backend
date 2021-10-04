import { Router, Request, Response } from 'express';
import * as investmentRepository from './repository';
import { database } from './database';

export const investmentRouter =  Router();
investmentRouter.get('/', (req: Request, res: Response) => {
  try {
    const data = investmentRepository.getAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({error});
  }
});

investmentRouter.get('/:id', (req: Request, res: Response) => {
  try {
    const data = investmentRepository.getById(req.params?.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({error});
  }
});

investmentRouter.get('/metadatas/towns', (req: Request, res: Response) => {
  try {
    res.status(200).json(database.towns);
  } catch (error) {
    res.status(500).json({error});
  }
});
investmentRouter.get('/metadatas/progress-reports', (req: Request, res: Response) => {
  try {
    res.status(200).json(database.progressReports);
  } catch (error) {
    res.status(500).json({error});
  }
});

investmentRouter.post('/search', (req: Request, res: Response) => {
  try {
    let data;
    if (req.body?.criteria || req.body?.pageable) {
      data = investmentRepository.searchInvestments(req.body.criteria, req.body.pageable);
    } else {
      data = investmentRepository.getAll();
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({error});
  }
});

