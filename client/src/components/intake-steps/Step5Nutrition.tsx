// /src/components/intake-steps/Step5Nutrition.tsx

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { FormData } from "../IntakeForm";

interface Step5NutritionProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export default function Step5Nutrition({ formData, updateFormData }: Step5NutritionProps) {
  return (
    <div className="space-y-6">
      {/* Eating Pattern */}
      <Card>
        <CardContent className="space-y-4 pt-4">
          <div>
            <Label className="text-sm">Eating Pattern</Label>
            <Input
              value={formData.eatingPattern}
              onChange={(e) => updateFormData({ eatingPattern: e.target.value })}
              placeholder="veg / non-veg / eggetarian etc."
            />
          </div>

          {/* Foods You Love */}
          <Separator />
          <div>
            <Label className="text-sm">Foods You Love</Label>
            <Input
              placeholder="Enter foods separated by commas"
              value={formData.foodsLove.join(", ")}
              onChange={(e) =>
                updateFormData({
                  foodsLove: e.target.value
                    .split(",")
                    .map((item) => item.trim())
                    .filter((item) => item !== "")
                })
              }
            />
          </div>

          {/* Foods You Avoid */}
          <Separator />
          <div>
            <Label className="text-sm">Foods You Avoid</Label>
            <Input
              placeholder="Enter foods separated by commas"
              value={formData.foodsAvoid.join(", ")}
              onChange={(e) =>
                updateFormData({
                  foodsAvoid: e.target.value
                    .split(",")
                    .map((item) => item.trim())
                    .filter((item) => item !== "")
                })
              }
            />
          </div>

          {/* Additional Notes */}
          <Separator />
          <div>
            <Label className="text-sm">Additional Notes</Label>
            <Input
              value={formData.additionalNotes}
              placeholder="Any special notes?"
              onChange={(e) => updateFormData({ additionalNotes: e.target.value })}
            />
          </div>
        </CardContent>
      </Card>

      {/* ✅ PRIVACY CONSENT — moved from ReviewStep to Step 5 */}
      <Card className="border border-primary/40">
        <CardContent className="py-4">
          <label className="flex items-start gap-3 cursor-pointer">

            {/* IMPORTANT: This updates formData.privacyAccepted */}
            <input
              type="checkbox"
              checked={formData.privacyAccepted}
              onChange={(e) => updateFormData({ privacyAccepted: e.target.checked })}
              className="mt-1"
            />

            <p className="text-sm text-muted-foreground leading-5">
              I agree to the{" "}
              <a href="/privacy" target="_blank" className="text-primary underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/terms" target="_blank" className="text-primary underline">
                Terms & Conditions
              </a>
              . I consent to the collection & processing of my information as per DPDPA (India).
            </p>

          </label>
        </CardContent>
      </Card>
    </div>
  );
}
