"use client"
import { authConfig } from "@/app/configs/auth";
import { createReport } from "@/app/reports/actions";
import { error } from "console";
import { useSession } from "next-auth/react"
import router from "next/router";

export default async function NewReportForm() {
    const { data: session, status } = useSession()


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        
        if (session?.user) {
            try {
                await createReport(formData, session.user.id);
                router.push("/reports/");
            } catch (error) {
                Error("Failed to create report. Please try again.");
            }
        } else {
            Error("You must be logged in to create a report.");
        }
    };

    return (
        <>
            {session ? (
                <form className="report-form" >
                    <div>
                        <input type="text" placeholder="Title" required name="title" />
                    </div>
                    <div>
                        <input type="integer" placeholder="Your age" required name="age" />
                    </div>
                    <div>
                        <label>
                            <input type="radio" name="gender" value="male" required />
                            Male
                        </label>
                        <label>
                            <input type="radio" name="gender" value="female" required />
                            Female
                        </label>
                        <label>
                            <input type="radio" name="gender" value="other" required />
                            Other
                        </label>
                        </div>
                    <div>
                        <textarea name="body" placeholder="Content" required className="edit-text" />
                    </div>
                    <div>
                        <input type="submit" value="Add Report" />
                    </div>
                </form>
            ) : (
                <div>
                    You have to be logged in to add new reports!
                </div>
            )}
            <pre>{session ? JSON.stringify(session, null, 2) : 'Loading session...'}</pre>
        </>
    );
}

export { NewReportForm }
