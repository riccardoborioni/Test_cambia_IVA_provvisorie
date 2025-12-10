export default {
	onLoad: () => {
		// Pulisce la memoria della tabella sotto
		storeValue('fattureDaModificare', []);
        // Resetta i widget (opzionale, per essere sicuri che l'input sia vuoto)
        resetWidget('Input_CF');
        resetWidget('Table1'); 
	}
}