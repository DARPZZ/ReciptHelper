import {sletkvitEach} from '../../helpers/api/reciptapi'
export default async function SletKvitteringPåId(id:number) {
    const response = await sletkvitEach(id);
    return response;
}