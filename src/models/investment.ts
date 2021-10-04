import { JsonObject, JsonProperty } from "json2typescript";
import { v4 as uuidv4 } from 'uuid';

@JsonObject("Investment")
export class Investment {

    id: string = uuidv4();

    @JsonProperty("titreoperation", String)
    title: string = null;

    @JsonProperty("ville", String)
    city: string = null;

    @JsonProperty("ppi", String)
    ppi: string = null;
    
    @JsonProperty("lycee", String)
    school: string = null;

    @JsonProperty("codeuai", String)
    uai: string = null;

    @JsonProperty("etat_d_avancement", String)
    progressState: string = null;

    @JsonProperty("entreprise", String, true)
    company: string = null;

    @JsonProperty("annee_de_livraison", String, true)
    deliveryYear: string = null;

    @JsonProperty("annee_d_individualisation", String, true)
    individualizationYear: string = null;

    @JsonProperty("mandataire", String, true)
    representative: string = null;

    @JsonProperty("notification_du_marche", String, true)
    marketNotification: string = null;

    @JsonProperty("nombre_de_lots", Number, true)
    lotsNumber: string = null;

    @JsonProperty("longitude", Number, true)
    longitude: number = null;

    @JsonProperty("latitude", Number, true)
    latitude: number = null;
    
}