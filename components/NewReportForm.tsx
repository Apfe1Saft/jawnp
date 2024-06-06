import { createReport } from "@/app/reports/actions";
import { getServerSession } from 'next-auth/next';

export default async function NewReportForm() {
    const session = await getServerSession();

    return (
        <>
            {session ? (
                <form className="report-form" action={createReport}>
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
        </>
    );
}

export { NewReportForm }