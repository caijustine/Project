import { useState } from "react";

export function TicketForm() {
   // Add hooks
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    
    // Handle Events
    async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();   
        setErrorMessage("Ticket creation has not been implemented");
    }

    return (
        <form className="ticket-form" onSubmit={(event) => void handleSubmit(event)}>
            <fieldset disabled={isSubmitting}>
                <legend>Create a support ticket</legend>

                <label htmlFor="title">Title</label>
                <input 
                    id="title" 
                    minLength={3}
                    maxLength={120}
                    required
                    value="Changeme"
                />

                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    minLength={1}
                    maxLength={2000}
                    required
                    rows={5}
                    value="Changeme"
                />

                <label htmlFor="priority">Priority</label>
                <select
                    id="priority"
                    value="Changeme"
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

                <button type="submit">
                    {isSubmitting ? "Creating..." : "Create ticket"}
                </button>

            </fieldset>

            {errorMessage !== null && <p role="alert">{errorMessage}</p>}
    
        </form>

    )
}
