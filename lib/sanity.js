import sanityClient from '@sanity/client';
import {PROJECT_ID,TOKEN} from '../keys';

export const client=sanityClient({
    projectId: PROJECT_ID,
    dataset: 'production',
    apiVersion:'2022-06-14',
    token: TOKEN,
    useCdn: false
});