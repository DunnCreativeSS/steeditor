import { Beneficiary } from './beneficiary.model';

export interface Draft {
  id: string;
  title: string;
  body: string;
  tags: string;
  thumbnailUrl: string;
  beneficiaries: Array<Beneficiary>;
  allowVotes: boolean;
  allowCurationRewards: boolean;
  percentSteemDollars: number;
  maxAcceptedPayout: number;
  jsonMetadata: string;
}

export const standardDraft: Draft = {
  id: '',
  title: '',
  body: '',
  tags: '',
  thumbnailUrl: '',
  beneficiaries: [],
  allowVotes: true,
  allowCurationRewards: true,
  percentSteemDollars: 50,
  maxAcceptedPayout: 1000000,
  jsonMetadata: ''
};
